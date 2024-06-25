# Role-based Access Control (RBAC)
# --------------------------------

package app.rbac

import rego.v1

# import data.utils

# By default, deny requests
default response := {
	"allow": false,
	"message": "Access Denied",
}

# Return user detail if password is good
response := {
	"allow": true,
	"message": "Access Granted",
	"username": input.username,
	"membership": data.username[input.username].membership,
	"purchase_history": data.username[input.username].purchase_history,
} if {
	# Check if passoword is good
	input.password == data.username[input.username].password
}
