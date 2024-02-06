const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid gray',
    borderRadius: 16,
  },

  imageContainer: {},

  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  contentContainer: {
    marginLeft: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  nameText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  commentText: {
    color: 'black',
    fontSize: 16,
  },
};

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src={'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg'}
          style={styles.image} />
      </div>

      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;