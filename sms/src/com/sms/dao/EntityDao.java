package com.sms.dao;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
@Transactional(propagation=Propagation.REQUIRED)
@Component("dao")
public class EntityDao implements Dao {

	private SqlSession session;
	@Resource(name="sqlSession")
	public void setSession(SqlSession session) {
		this.session = session;
	}

	@Override
	public <T> void add(String mapperId,T t) {
		    session.insert(mapperId, t);
	  
	}

	@Override
	public <T>  T selectOne(String mapperId, HashMap<String, Object> params) {
		 return session.selectOne(mapperId, params);
	}

	@Override
	public <T> List<T> select(String mapperId, HashMap<String, Object> params) {
		 return session.selectList(mapperId,params);
	}

	@Override
	public <T> void batchAdd(String mapperId, List<T> t) {
		 session.insert(mapperId, t);
	}

	@Override
	public <T> void delete(String mapperId, T t) {
		   session.delete(mapperId, t);
	}

	@Override
	public <T> void update(String mapperId, T t) {
		  session.update(mapperId, t);
	}

	@Override
	public <T> void batchDelete(String mapperId, List<T> t) {
		  session.delete(mapperId, t);
	}

	@Override
	public <T> void batchUpdate(String mapperId, List<T> t) {
		  for(T a :t){
		  session.update(mapperId, a);
		  }
		 }

}
 