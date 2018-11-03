import { connect } from 'react-redux';
import AppCpt from '../components/AppCpt';

const mapStateToProps = state => ({
  test: state.root.test || 'nope',
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppCpt);
