package Calculadora;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

@RunWith(cucumber.api.junit.Cucumber.class)
@CucumberOptions(features="src/test/resources/Calculadora.feature", 
				 glue= {""},
				 plugin = { "pretty", "html:target/cucumber-reports" }
				)
public class CalculadoraTest {
	
}