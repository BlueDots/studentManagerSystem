package com.sms.li.service;

import java.util.List;

import javax.annotation.Resource;

 
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.sms.dao.Dao;
 
import com.sms.li.po.Student;
import com.sms.li.po.User;
@Transactional(propagation=Propagation.REQUIRED)
@Service("userSerivce")
public class UserServiceImpl  implements UserService {

	 private Dao dao;
    @Resource(name="dao")
    public void setDao(Dao dao) {
		this.dao = dao;
	}

 
	@Override
	public List<User> findUser() {
	 
		List<Student> students  =   dao.select("findStudent",null); 
		 for(Student student:students){
			 System.out.println(student.getId()+"--"+student.getUsername()+"--"+student.getSex());
		 }
		 
		return dao.select("com.sms.anping.dao.UserDao.findUser", null);
	}
 
	

}
