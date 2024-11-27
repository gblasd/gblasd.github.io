import { Config } from 'types';
import {
  Email,
  GitHub,
  LinkedIn,
  Resume,
  Kaggle,
  LeetCode,
  Medium,
  Datacamp,
} from 'icons';

export const config: Config = {
  name: {
    display: 'Gustavo Blas Duran',
  },
  title: {
    display: 'Data Engineer',
  },
  buttons: [
    {
      name: 'github',
      display: 'GitHub',
      ariaLabel: 'GitHub profile (opens in new window)',
      icon: <GitHub />,
      href: 'https://github.com/gblasd/',
    },
    {
      name: 'linked-in',
      display: 'LinkedIn',
      ariaLabel: 'LinkedIn profile (opens in new window)',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/gblasd/',
    },
    {
      name: 'resume',
      display: 'Resume',
      ariaLabel: 'Resume in Google Drive (opens in new window)',
      icon: <Resume />,
      href: 'https://drive.google.com/drive/folders/1kboz2ynZFdNxQRVHXWG8J5-vNf6eRNa6?usp=sharing',
    },
    {
      name: 'email',
      display: 'Email',
      ariaLabel: 'Email contact (opens in new window)',
      icon: <Email />,
      href: 'mailto:gustavoblasduran@gmail.com',
    },
    {
      name: 'kaggle',
      display: 'Kaggle',
      ariaLabel: 'Kaggle contact (opens in new window)',
      icon: <Kaggle />,
      href: 'https://www.kaggle.com/gblasd',
    },
    {
      name: 'LeetCode',
      display: 'LeetCode',
      ariaLabel: 'LeetCode contact (opens in new window)',
      icon: <LeetCode />,
      href: 'https://leetcode.com/u/gblasd/',
    },
    {
      name: 'Medium',
      display: 'Medium',
      ariaLabel: 'Medium contact (opens in new window)',
      icon: <Medium />,
      href: 'https://medium.com/@gustavoblasduran',
    },
    {
      name: 'Datacamp',
      display: 'datacamp',
      ariaLabel: 'Datacamp contact (opens in new window)',
      icon: <Datacamp />,
      href: 'https://www.datacamp.com/portfolio/gblasd',
    },
  ],
};
