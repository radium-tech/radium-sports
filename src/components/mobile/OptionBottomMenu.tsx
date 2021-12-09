import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import OptionBottomMenuModel from '../../model/optionBottomMenu';
import styles from '../../styles/components/mobile/OptionBottomMenu.module.css';
import updateOption from '../../functions/optionsBottomMenu';

interface OptionBottomMenuProps {
  option: OptionBottomMenuModel;
}

export default function OptionBottomMenu({ option }: OptionBottomMenuProps) {
  const [getOption, setOption] = useState(option);
  const router = useRouter();
  const currentPath = router.asPath;

  function renderOption() {
    const selectedOption = getOption.selected ? styles.selected : '';
    return (
      <div className={`${styles.option} ${selectedOption}`}>
        <Link href={getOption.link} passHref>
          <div className={styles.icon}>
            <img src={getOption.iconPath} alt="" />
          </div>
        </Link>
      </div>
    );
  }
  useEffect(() => {
    setOption(updateOption(getOption, currentPath));
    renderOption();
  }, [router.asPath]);

  return renderOption();
}
