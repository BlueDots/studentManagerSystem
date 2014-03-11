package com.li.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import org.apache.struts2.interceptor.ServletResponseAware;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.li.po.User;
import com.li.service.UserService;
import com.opensymphony.xwork2.ActionSupport;

@Controller  
@Scope("prototype")
public class HelloAction extends ActionSupport implements ServletResponseAware {
    
    private UserService userService;
    
	@Resource(name="userService")  
	 public void setUserService(UserService userService) {
		this.userService = userService;
	}

	private static final long serialVersionUID = -6493858961444458651L; 
	 
	 private HttpServletResponse response;  
	 
	 @Override  
	 public void setServletResponse(HttpServletResponse response) {  
	        this.response = response;  
	  }  
	 
	 @Override  
	 public String execute() throws Exception {  		 	
	        System.out.println("HelloAction.execute is executing..."); 
	        List<User> user = userService.findUser();
	        System.out.println(user.get(0).getAge());
	        return SUCCESS;  
	 }  
	 
	 public void say() throws IOException{  
	        System.out.println("HelloAction.say is executing....");  
	        response.setContentType("text/html;charset=utf-8");  
	        PrintWriter out = response.getWriter();  
	        out.println("<span style='color:red;'>啊哈，We are here!</span>");  
	        out.close();  
	      
	 }  

}
