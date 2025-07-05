import React, { useState } from 'react';
import './Profile.css';

import image from '../assets/image.png';
import knight from '../assets/knight.png';
import lcheat from '../assets/lcheat.png';
import cf from '../assets/cf.png';
import atcoder from '../assets/atcoders.png';
import github from '../assets/github.png'; // ✅ Make sure this file exists in assets

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
    <section className="profile-section">
      <h2 className="profile-title">Profiles</h2>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {profiles.map((profile, idx) => (
            <div
              className="marquee-card"
              key={idx}
              onClick={() => openModal(profile.img)}
            >
              <img
                src={profile.img}
                alt={profile.name}
                className="marquee-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'; // fallback logo
                }}
              />
              <p className="profile-name">{profile.name}</p>
            </div>
          ))}
        </div>
      </div>

      {modalImg && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <img src={modalImg} alt="Preview" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
