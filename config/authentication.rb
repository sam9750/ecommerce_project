require 'stripe'


Stripe.api_key = 'sk_test_51L7ny5BqFuEnTEglwRQwAa7tgWXKEJaoT0bzJo6okb7EJAeMbKnZgkOdUwlTPDDH1J2pCD6bYQg7mvj2Jq7pC3yZ0086dwKylo'

Stripe::Customer.list 