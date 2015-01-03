	function validacion() {
		if (document.getElementById("isbn").value == "")
			alert("datos no válidos");
		else
			document.forms[0].submit();
	}