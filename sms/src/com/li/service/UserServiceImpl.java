package com.li.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.li.dao.LoginDao;
import com.li.po.User;
@Transactional(propagation=Propagation.REQUIRED)
@Service(value="userService")
public class UserServiceImpl implements UserService {

	 private LoginDao loginDao;

  @Resource(name="loginDao")
	public void setLoginDao(LoginDao loginDao) {
	this.loginDao = loginDao;
}

	@Override
	public List<User> findUser() {
 
		return loginDao.getUser("getAllUser");
	}

}
