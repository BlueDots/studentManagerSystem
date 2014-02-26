<script type="text/javascript">

        //����ѡ�������캯��
        function DateSelector(selYear, selMonth, selDay)
        {
            this.selYear = selYear;
            this.selMonth = selMonth;
            this.selDay = selDay;
            this.selYear.Group = this;
            this.selMonth.Group = this;
            // ����ݡ��·������˵����onchange�¼�������
            if(window.document.all != null){
                //IE�°��¼�����
                this.selYear.attachEvent("onchange", DateSelector.Onchange);
                this.selMonth.attachEvent("onchange", DateSelector.Onchange);
            }
            else{
                // Firefox�°��¼�����
                this.selYear.addEventListener("change", DateSelector.Onchange, false);
                this.selMonth.addEventListener("change", DateSelector.Onchange, false);
            }
            if(arguments.length == 4) {

                // ��������������Ϊ4�����һ����������ΪDate����
                this.InitSelector(arguments[3].getFullYear(), arguments[3].getMonth() + 1, arguments[3].getDate());

            } else if(arguments.length == 6) {

                 // ��������������Ϊ6�����������������Ϊ��ʼ����������ֵ
                this.InitSelector(arguments[3], arguments[4], arguments[5]);

            } else {

                // Ĭ��ʹ�õ�ǰ����
                var dt = new Date();
                this.InitSelector(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
            }
        }

 

        // ����һ����С��ݵ�����
        DateSelector.prototype.MinYear = (new Date()).getFullYear();
        // ����һ�������ݵ�����
        DateSelector.prototype.MaxYear = 2020;

 

        // ��ʼ�����
        DateSelector.prototype.InitYearSelect = function() {
            // ѭ�����OPIONԪ�ص����select������
            for(var i = this.MinYear; i <= this.MaxYear; i++) {
                // �½�һ��OPTION����
                var op = window.document.createElement("OPTION");
                // ����OPTION�����ֵ
                op.value = i;
                // ����OPTION���������
                op.innerHTML = i;
                // ��ӵ����select����
                this.selYear.appendChild(op);
            }
        }

        // ��ʼ���·�
        DateSelector.prototype.InitMonthSelect = function() {
            // ѭ�����OPIONԪ�ص��·�select������
            for(var i = 1; i < 13; i++)
            {
                // �½�һ��OPTION����
                var op = window.document.createElement("OPTION");
                // ����OPTION�����ֵ
                op.value = i;
                // ����OPTION���������
                op.innerHTML = i;
                // ��ӵ��·�select����
                this.selMonth.appendChild(op);
            }
        }

        // ����������·ݻ�ȡ���µ�����
        DateSelector.DaysInMonth = function(year, month) {
            var date = new Date(year, month, 0);
            return date.getDate();
        }

        // ��ʼ������
        DateSelector.prototype.InitDaySelect = function() {
            // ʹ��parseInt������ȡ��ǰ����ݺ��·�
            var year = parseInt(this.selYear.value);
            var month = parseInt(this.selMonth.value);
            
            // ��ȡ���µ�����
            var daysInMonth = DateSelector.DaysInMonth(year, month);
            
            // ���ԭ�е�ѡ��
            this.selDay.options.length = 0;
            // ѭ�����OPIONԪ�ص�����select������
            for(var i = 1; i <= daysInMonth ; i++) {
                // �½�һ��OPTION����
                var op = window.document.createElement("OPTION");
                // ����OPTION�����ֵ
                op.value = i;
                // ����OPTION���������
                op.innerHTML = i;
                // ��ӵ�����select����
                this.selDay.appendChild(op);
            }
        }

        // ������ݺ��·�onchange�¼��ķ���������ȡ�¼���Դ����       

        // ����������Group�����ṩ��InitDaySelect�������³�ʼ������
        // ����eΪevent����
        DateSelector.Onchange = function(e) {
            var selector = window.document.all != null ? e.srcElement : e.target;
            selector.Group.InitDaySelect();
        }

        // ���ݲ�����ʼ�������˵�ѡ��
        DateSelector.prototype.InitSelector = function(year, month, day) {
            // �����ⲿ���Ե���������������������ҲҪ��selYear��selMonth��ѡ�����
            // ������ΪInitDaySelect�����Ѿ���������������˵����������Ͳ����ظ�������
            this.selYear.options.length = 0;
            this.selMonth.options.length = 0;
            
            // ��ʼ���ꡢ��
            this.InitYearSelect();
            this.InitMonthSelect();
            
            // �����ꡢ�³�ʼֵ
            this.selYear.selectedIndex = this.MinYear - year;
            this.selMonth.selectedIndex = month - 1;
            
            // ��ʼ������
            this.InitDaySelect();
            
            // ����������ʼֵ
            this.selDay.selectedIndex = day - 1;
        }
    </script>
<script type="text/javascript">
    var selYear = window.document.getElementById("selYear");
    var selMonth = window.document.getElementById("selMonth");
    var selDay = window.document.getElementById("selDay");
    var now = new Date();
    //��������Ч����ͬ������Ĭ��Ϊ��ǰ����
    new DateSelector(selYear,selMonth,selDay);
    //new DateSelector(selYear, selMonth ,selDay, now);
    //new DateSelector(selYear, selMonth ,selDay, now.getFullYear(), now.getMonth()+1, now.getDate());
</script>