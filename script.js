ZOHO.embeddedApp.on("PageLoad", function (data) {

    console.log("Zoho Context:", data);

    if (!data || !data.Entity || !data.EntityId) {
        document.getElementById("msg").innerText =
            "Loaded without record context";
        return;
    }

    document.getElementById("module").innerText = data.Entity;
    document.getElementById("rid").innerText = data.EntityId[0];

    document.getElementById("msg").innerText =
        "✅ External widget loaded successfully";
});

// REQUIRED
ZOHO.embeddedApp.init();
