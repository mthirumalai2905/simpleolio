import React, { useState } from 'react';
import './Profile.css';
import { motion, AnimatePresence } from 'framer-motion';

import image from '../assets/image.png';
import knight from '../assets/knight.png';
import lcheat from '../assets/lcheat.png';
import cf from '../assets/cf.png';
import atcoder from '../assets/atcoders.png';
import github from '../assets/github.png';

const profiles = [
  {
    name: 'Codeforces',
    img: cf,
    link: 'https://codeforces.com/profile/yourusername',
  },
  {
    name: 'AtCoder',
    img: atcoder,
    link: 'https://atcoder.jp/users/yourusername',
  },
  {
    name: 'CodeChef',
    img: image,
    link: 'https://www.codechef.com/users/yourusername',
  },
  {
    name: 'LeetCode',
    img: lcheat,
    link: 'https://leetcode.com/yourusername',
  },
  {
    name: 'Knight Badge',
    img: knight,
    link: null,
  },
  {
    name: 'GitHub',
    img: github,
    link: 'https://github.com/yourusername',
  },
];

const Profile = () => {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img) => {
    setModalImg(img);
  };

  const closeModal = () => {
    setModalImg(null);
  };

  return (
    <motion.section 
      className="profile-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="profile-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Profiles
      </motion.h2>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {profiles.map((profile, idx) => (
            <motion.div
              className="marquee-card"
              key={idx}
              onClick={() => openModal(profile.img)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={profile.img}
                alt={profile.name}
                className="marquee-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png';
                }}
              />
              <p className="profile-name">{profile.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalImg && (
          <motion.div 
            className="modal-overlay"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img src={modalImg} alt="Preview" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Profile;
