import * as React from 'react';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';

const PropTypes = React.PropTypes;

export default class FlexItem extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    prefixCls: 'am-flexbox'
  };
  render() {
    let[{ children, className, prefixCls }, restProps] = splitObject(this.props,
      ['children', 'className', 'prefixCls']);
    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [className]: className
    });
    return (
      <div
        {...restProps}
        className={wrapCls}
      >{children}</div>
    );
  }
}
