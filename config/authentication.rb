require 'stripe'


Stripe.api_key = 'sk_test_51LGmiQCkxGwbXGjyTMra4mvI6HBMn4PtyrZrxu1QxykkJZlPusNaSBOzjfWI242TXm0y4uvLjtxkmvylEidwoUId00RHhrfIWS'

Stripe::Customer.list 