function passwordStrength(f, i, d) {
	var k = 1, h = 2, b = 3, a = 4, c = 5, g = 0, j, e;
	if ((f != d) && d.length > 0) {
		return c
	}
	if (f.length < 4) {
		return k
	}
	if (f.toLowerCase() == i.toLowerCase()) {
		return h
	}
	if (f.match(/[0-9]/)) {
		g += 10
	}
	if (f.match(/[a-z]/)) {
		g += 26
	}
	if (f.match(/[A-Z]/)) {
		g += 26
	}
	if (f.match(/[^a-zA-Z0-9]/)) {
		g += 31
	}
	j = Math.log(Math.pow(g, f.length));
	e = j / Math.LN2;
	if (e < 40) {
		return h
	}
	if (e < 56) {
		return b
	}
	return a
};
(function(a) {
	function b() {
		var e = a("#pass1").val(), d = a("#user_login").val(), c = a("#pass2")
				.val(), f;
		a("#pass-strength-result").removeClass("short bad good strong");
		if (!e) {
			a("#pass-strength-result").html(pwsL10n.empty);
			return
		}
		f = passwordStrength(e, d, c);
		switch (f) {
			case 2 :
				a("#pass-strength-result").addClass("bad").html(pwsL10n.bad);
				break;
			case 3 :
				a("#pass-strength-result").addClass("good").html(pwsL10n.good);
				break;
			case 4 :
				a("#pass-strength-result").addClass("strong")
						.html(pwsL10n.strong);
				break;
			case 5 :
				a("#pass-strength-result").addClass("short")
						.html(pwsL10n.mismatch);
				break;
			default :
				a("#pass-strength-result").addClass("short")
						.html(pwsL10n["short"])
		}
	}
	a(document).ready(function() {
		var c = a("#display_name");
		a("#pass1").val("").keyup(b);
		a("#pass2").val("").keyup(b);
		a("#pass-strength-result").show();
		a(".color-palette").click(function() {
					a(this).siblings('input[name="admin_color"]').prop(
							"checked", true)
				});
		if (c.length) {
			a("#first_name, #last_name, #nickname").bind("blur.user_profile",
					function() {
						var e = [], d = {
							display_nickname : a("#nickname").val() || "",
							display_username : a("#user_login").val() || "",
							display_firstname : a("#first_name").val() || "",
							display_lastname : a("#last_name").val() || ""
						};
						if (d.display_firstname && d.display_lastname) {
							d.display_firstlast = d.display_firstname + " "
									+ d.display_lastname;
							d.display_lastfirst = d.display_lastname + " "
									+ d.display_firstname
						}
						a.each(a("option", c), function(f, g) {
									e.push(g.value)
								});
						a.each(d, function(h, f) {
									if (!f) {
										return
									}
									var g = f.replace(/<\/?[a-z][^>]*>/gi, "");
									if (d[h].length && a.inArray(g, e) == -1) {
										e.push(g);
										a("<option />", {
													text : g
												}).appendTo(c)
									}
								})
					})
		}
	})
})(jQuery);