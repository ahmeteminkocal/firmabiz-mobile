import {
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';

interface DialogParams {
  builder: React.ReactElement,
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Dialog = ({builder, visible, setVisible}: DialogParams) => {

  return (
    <Modal
      animationType="none"    
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <Pressable className='py-safe px-4' style={styles.modalOverlay} onPress={() => setVisible(false)}>
        <Pressable className='w-full' onPress={() =>{}}>
            {builder}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dialog;