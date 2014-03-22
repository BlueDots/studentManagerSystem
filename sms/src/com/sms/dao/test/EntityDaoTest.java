package com.sms.dao.test;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.sms.dao.Dao;
import com.sms.li.po.Student;

public class EntityDaoTest {
   
	@Test
	 	public void testAddMethod(){
	 		ApplicationContext context  = new ClassPathXmlApplicationContext("applicationContext.xml");
	 		Dao  dao  = (Dao) context.getBean("dao");
	 		Student student = new Student();
	 		student.setId(1);
	 		student.setUsername("anpung");
	 		student.setSex("n");
	 	 dao.add("com.sms.anping.dao.StudentDao.addStudent", student);
	 		
	 		
	 	}
	    
	  
	    @Test
		 	public void testBatchAddMethod(){
		 		ApplicationContext context  = new ClassPathXmlApplicationContext("applicationContext.xml");
		 		Dao  dao  = (Dao) context.getBean("dao");
		 	List<Student> list  = new ArrayList<Student>();
		 		Student student = new Student();
		 		student.setId(1);
		 		student.setUsername("anpung");
		 		student.setSex("n");
		 		list.add(student);
		 		Student student5 = new Student();
		 		student5.setId(1);
		 		student5.setUsername("anpung");
		 		student5.setSex("n");
		 		list.add(student5);
		 		Student student4 = new Student();
		 		student4.setId(1);
		 		student4.setUsername("anpung");
		 		student4.setSex("n");
		 		list.add(student4);
		 		Student student3 = new Student();
		 		student3.setId(1);
		 		student3.setUsername("anpung");
		 		student3.setSex("n");
		 		list.add(student3);
		 		Student student2 = new Student();
		 		student2.setId(1);
		 		student2.setUsername("anpung");
		 		student2.setSex("n");
		 		list.add(student2);
		 		Student student1 = new Student();
		 		student1.setId(1);
		 		student1.setUsername("anpung");
		 		student1.setSex("n");
		 		list.add(student1);
		 	 dao.batchAdd("com.sms.anping.dao.StudentDao.addStudentByBatch", list);
		 		
		 		
		 	}
	    
	    
}
