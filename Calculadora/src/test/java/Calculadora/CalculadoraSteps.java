package Calculadora;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Calculadora.CalculadoraMaps;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;

public class CalculadoraSteps {

	public WebDriver driver;
	CalculadoraMaps calculadora;

	@Before
	public void before() 
	{
		System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver/chromedriver.exe");
		driver = new ChromeDriver();
		calculadora = new CalculadoraMaps(driver);
	}

	@After
	public void after() throws InterruptedException 
	{
		Thread.sleep(3000);
		driver.quit();
	}

	@Dado("^que acessado a aplica��o$")
	public void que_acessado_a_aplica��o() throws Throwable 
	{
		driver.manage().window().maximize();
		driver.navigate().to("https://calculadoratriangulo.herokuapp.com/");
	}

	@Quando("^n�o informar os valores dos lados$")
	public void n�o_informar_os_valores_dos_lados() throws Throwable {
	}
	
	@Quando("^informar os valores do lado1 (.*), lado2 (.*) e lado3 (.*)")
	public void Informar_valores_do_lado(int lado1, int lado2, int lado3) throws InterruptedException
	{
		calculadora.lado1(lado1);
		Thread.sleep(1000);
		calculadora.lado2(lado2);
		Thread.sleep(1000);
		calculadora.lado3(lado3);
		Thread.sleep(1000);
	}

	@Quando("^calcular os lados do tri�ngulo$")
	public void calcular_os_lados_do_tri�ngulo() throws Throwable 
	{
		calculadora.calcular();;
	}
	
	@Entao("^ser� exibida a mensagem \"([^\"]*)\"$")
	public void ser�_exibida_a_mensagem(String mensagem) throws Throwable 
	{
		assertEquals(driver.findElement(By.id("message")).getText(), mensagem.replace("\"", ""));
	}


	@Entao("^o \"([^\"]*)\" ser� calculado$")
	public void o_ser�_calculado(String triangulo) throws Throwable 
	{
		assertEquals(driver.findElement(By.id("message")).getText(), triangulo.replace("\"", ""));
	}
}
