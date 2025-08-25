// Teste simples da function process-form
const testData = {
  edital: "TESTE-LOCAL-001",
  empresa_tomador: "Empresa Teste Tomador",
  cnpj_tomador: "11.222.333/0001-81",
  endereco_tomador: "Endereço Teste",
  empresa_assegurado: "Empresa Teste Assegurado",
  cnpj_assegurado: "22.333.444/0001-92",
  endereco_assegurado: "Endereço Assegurado",
  submitted_at: new Date().toISOString()
};

console.log("🧪 Testando Function process-form...");
console.log("📤 Dados de teste:", JSON.stringify(testData, null, 2));

// Simular teste da function
async function testFunction() {
  try {
    console.log("🚀 Enviando requisição...");
    
    // Testar se a function está acessível
    const response = await fetch('/.netlify/functions/process-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    
    console.log("📊 Status:", response.status);
    console.log("📋 Headers:", response.headers);
    
    if (response.ok) {
      const result = await response.json();
      console.log("✅ Sucesso:", result);
    } else {
      const error = await response.text();
      console.log("❌ Erro:", error);
    }
    
  } catch (error) {
    console.log("💥 Erro na requisição:", error.message);
  }
}

// Executar teste
testFunction();
