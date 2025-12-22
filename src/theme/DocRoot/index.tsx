import type {ReactNode} from 'react';
import DocRoot from '@theme-original/DocRoot';
import type DocRootType from '@theme/DocRoot';
import type {WrapperProps} from '@docusaurus/types';
import styles from './styles.module.css';

type Props = WrapperProps<typeof DocRootType>;

export default function DocRootWrapper(props: Props): ReactNode {
  return (
    <div className={styles.docRoot}>
      {/* Enhanced Background Pattern */}
      <div className={styles.backgroundPattern}></div>

      <div className={styles.docRootContainer}>
        <DocRoot {...props} />
      </div>
    </div>
  );
}