import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$20",
            "features": [
                "Access to cardio area",
                "Access to weightlifting area",
                "Access to locker room",
                "Limited access to personal trainers"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": "$40",
            "features": [
                "Access to all Basic features",
                "Access to group fitness classes",
                "Personal locker",
                "Discounts on merchandise"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": "$60",
            "features": [
                "Access to all Standard features",
                "Access to sauna and steam room",
                "Towel service",
                "Unlimited access to personal trainers",
                "Complimentary smoothie bar"
            ]
        }
    ];

    return (
        <div>
            <h2 className="text-4xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}>

                    </PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;