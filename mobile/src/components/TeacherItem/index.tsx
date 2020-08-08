import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

const TeacherItem: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://avatars1.githubusercontent.com/u/56613910?s=460&u=fadc747b48e9a121ac6f6a7087f0301fbbdd8bc0&v=4' }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Eduardo Santana</Text>
          <Text style={styles.subject}>Programming</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Passionate about learning new things, specially when it comes to Javascript technologies.
        {'\n'}{'\n'}
        Focused right now on Node.js, ReactJS, React Native and Typescript.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
            <RectButton style={styles.favoriteButton}>
              <Image source={heartOutlineIcon} />
            </RectButton>
            <RectButton style={styles.contactButton}>
              <Image source={whatsappIcon} />
              <Text style={styles.contactButtonText}>Entrar em contato</Text>
            </RectButton>
        </View>        
      </View>

    </View>
  );
}

export default TeacherItem;