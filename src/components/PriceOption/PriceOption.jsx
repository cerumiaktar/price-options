import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} = option;

    return (
        <div className='bg-lime-500 rounded-md p-4 mt-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-2xl font-bold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-4'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}
                    
                    ></Feature> )
                }
            </div>
            <button className='mt-12 w-full bg-white p-2 rounded-lg font-semibold text-black hover:bg-black text-white'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;