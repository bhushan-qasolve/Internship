package ai.qasolve.admin_server;

import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

//	@Bean
//    protected void configure(HttpSecurity http) throws Exception {
//        SavedRequestAwareAuthenticationSuccessHandler successHandler
//                = new SavedRequestAwareAuthenticationSuccessHandler();
//        successHandler.setTargetUrlParameter("redirectTo");
//        successHandler.setDefaultTargetUrl("/");
//
//        http.authorizeRequests()
//                .requestMatchers("/assets/**").permitAll()
//                .requestMatchers("/login").permitAll()
//                .anyRequest().authenticated()
//                .and()
//                .formLogin().loginPage("/login").successHandler(successHandler).and()
//                .logout().logoutUrl("/logout").and()
//                .httpBasic().and()
//                .csrf()
//                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
//                .ignoringRequestMatchers("/instances",
//                        "/actuator/**");
//    }
//    
	
	
	@Bean
    protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        SavedRequestAwareAuthenticationSuccessHandler successHandler
                = new SavedRequestAwareAuthenticationSuccessHandler();
        successHandler.setTargetUrlParameter("redirectTo");
        successHandler.setDefaultTargetUrl("/");

        http.authorizeHttpRequests(configurer->
      configurer
              .requestMatchers("/assets/**").permitAll()
              .requestMatchers("/login").permitAll()
              .anyRequest().authenticated()
      )
        .formLogin(form->
        form
            .loginPage("/login").successHandler(successHandler)
            .permitAll()
            )
        .logout(logout -> logout.permitAll()
        ).exceptionHandling(configurer ->
        		configurer.accessDeniedPage("/logout"));

return http.build();

     
    }
	
	@Bean
    public WebSecurityCustomizer webSecurityCustomizer() throws Exception {
        return (web) -> web.ignoring().requestMatchers("/instances","/actuator/**");
    }
	
//	@Bean
//    public SavedRequestAwareAuthenticationSuccessHandler successHandler() {
//        SavedRequestAwareAuthenticationSuccessHandler successHandler = new SavedRequestAwareAuthenticationSuccessHandler();
//        successHandler.setTargetUrlParameter("redirectTo"); // Parameter for redirect URL
//        successHandler.setDefaultTargetUrl("/"); // Default redirect URL after login
//        return successHandler;
//    }
//    
	
	
	
	
	
//    @Bean
//    public DefaultSecurityFilterChain filterChain(HttpSecurity http) throws Exception{
//        http.authorizeHttpRequests(configurer->
//                configurer
//                        .requestMatchers("/assets/**").permitAll()
//                        .requestMatchers("/login").permitAll()
//
//                );
//
//        // use HTTP Basic Authentication
//        http.httpBasic(Customizer.withDefaults());
//
//        // disable Cross Site Request Forgery (CSRF)
//        // in general, not required for stateless REST APIs that use POST, PUT, DELETE and/or PATCH
//        http.csrf(csrf -> csrf.disable());
//
//        return http.build();

//}
}
