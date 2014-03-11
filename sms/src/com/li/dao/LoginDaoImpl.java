package com.li.dao;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.li.po.User;
@Transactional(propagation=Propagation.REQUIRED)
@Component(value="loginDao")
public class LoginDaoImpl  implements LoginDao{
    private SqlSessionFactory   sqlSessionFactory;
    private SqlSession  sqlSession;
	 @Resource(name="sqlSessionFactory")
	public void setSqlSessionFactory(SqlSessionFactory sqlSessionFactory) {
		this.sqlSessionFactory = sqlSessionFactory;
		sqlSession  = sqlSessionFactory.openSession();
	}

   
	public List<User> getUser(String sqlMapper) {
		 
		return sqlSession.selectList(sqlMapper);
	}


	 
	
}
