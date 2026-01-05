ZOHO.embeddedApp.on("PageLoad", function(data) {
  console.log("PageLoad Data:", data);

  document.getElementById("module").innerText = data.Entity;
  document.getElementById("recordId").innerText = data.EntityId[0];
});

ZOHO.embeddedApp.init();

function showAlert() {
  alert("Button widget is working 🎉");
}


