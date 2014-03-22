package com.sms.dao.test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder.In;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sms.dao.Dao;

public class SpringBeanInitTest {
     @Test
	public void test(){
    	 ApplicationContext  applicationContext  = new ClassPathXmlApplicationContext("applicationContext.xml");
    	 Dao  dao  = (Dao) applicationContext.getBean("dao");
    	 List<Integer>  string = new ArrayList<Integer>();
    	 string.add(1);
    	 string.add(0);
    	 dao.delete("deleteStudentByBatch", string);
    	 System.out.println("111");
     }
     
     @Test
 	public void testUpdate(){
     	 ApplicationContext  applicationContext  = new ClassPathXmlApplicationContext("applicationContext.xml");
     	 Dao  dao  = (Dao) applicationContext.getBean("dao");
     	 HashMap<Integer,String> map  = new HashMap<Integer, String>();
     	 map.put(3, "aaaaaa");
     	 map.put(4, "bbbbb");
     	 dao.update("updateStudentByBatch", map);
     	 
     	 System.out.println("111");
      }
}
