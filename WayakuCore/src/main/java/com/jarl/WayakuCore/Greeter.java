package com.jarl.WayakuCore;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/greeter")
public class Greeter {

    @GetMapping("/hi")
    public String hi() {
        return "Welcome to Wayaku";
    }
}

