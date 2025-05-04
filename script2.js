    function checkAccess() {
      const code = document.getElementById("accessCode").value;
      if (code === "LSPD") {
        localStorage.setItem("mdtAuth", "granted");
        window.location.href = "http://localhost:9898/Local/MDT%202/index.html?D660AADA-79C3-403E-956F-D279639F1E47";
      } else {
        document.getElementById("error").textContent = "رمز خاطئ. حاول مرة أخرى.";
      }
    }
