package com.li.dao;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.li.po.User;

public interface LoginDao {
 
	public List<User> getUser(String sqlMapper);
	 
}
