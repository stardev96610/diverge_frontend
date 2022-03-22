import { useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import classNames from 'classnames';

import './style.scss';

import coinImage from '../../assets/images/coins/kp3r.png';
import btcImage from '../../assets/images/coins/dai.png';

type CoinInfoProps = {
    imageUrl?: string;
    coinName?: string;
    currentPrice?: string;
    changePrice?: string;
    changePercent?: string;
    priceUp?: boolean;
};

const CoinInfo = ({ imageUrl, coinName, currentPrice, changePrice, changePercent, priceUp }: CoinInfoProps) => {


    return (
        <div className='coin_info d-flex justify-content-between align-items-center px-2'>
            <img src={imageUrl? btcImage : coinImage} alt="" />
            <span className={classNames('coin_name')}>{coinName}</span>
            <span className='coin_price'>{currentPrice}</span>
            <span className={classNames('coin_price_change', priceUp? 'price_up' : '')}>{priceUp? '': '-'}{changePrice}</span>
            <span className={classNames('coin_price_percent', priceUp? 'price_up' : '')}>({changePercent}%)</span>
        </div>
    );
};

export default CoinInfo;
