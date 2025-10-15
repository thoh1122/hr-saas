package com.hr.saas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * 人事SaaS系统主启动类
 * 
 * @author HR Team
 * @since 1.0.0
 */
@SpringBootApplication
public class HrSaasApplication {

    public static void main(String[] args) {
        SpringApplication.run(HrSaasApplication.class, args);
        System.out.println("=================================");
        System.out.println("人事SaaS系统启动成功！");
        System.out.println("访问地址: http://localhost:8080");
        System.out.println("API文档: http://localhost:8080/doc.html");
        System.out.println("=================================");
    }
}
