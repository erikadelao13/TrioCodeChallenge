import React from 'react';
import { Image } from 'react-native';
import { styles } from './LogoImage.styles';

const McDonaldsLogo = require('../../assets/img/mc_donalds_logo.png');

export const LogoImage = () => <Image style={styles.imgStyle} source={McDonaldsLogo} />;
