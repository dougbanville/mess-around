const secretKey = "sk_test_51H5GkKGKxADnLRPP5E3ngSxw6l38YKT9HdsJQezaReivjJbCeqEyH1Y4KiGkbLV67iFRPHaMIp4tCP9vjN269H9300RrDGeEGe";

const stripe = require('stripe')(secretKey);



const createCustomer = async () => {
    const customer = await stripe.customers.create();
    console.log(customer.id)
    return customer;
}

const saveCard = async (customerId) => {
    const setupIntent = await stripe.setupIntents.create({
        customer: customerId,
        payment_method_types: ['card'],
      });
    return setupIntent;
}

const createSavedCardIntent = async () => {
    const customer = await createCustomer();
    const { id } = customer;
    const intent = await saveCard(id);
    console.log(intent);
}
createSavedCardIntent();
