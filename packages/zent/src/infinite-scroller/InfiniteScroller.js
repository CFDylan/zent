import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Loading from 'loading';

export default class InfiniteScroller extends (PureComponent || Component) {
  static PropTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    hasMore: PropTypes.bool,
    loadMore: PropTypes.func,
    offset: PropTypes.num,
    initialLoad: PropTypes.bool,
    useWindow: PropTypes.bool,
    useCapture: PropTypes.bool,
    loader: PropTypes.node
  };

  static defaultProps = {
    prefix: 'zent',
    hasMore: true,
    offset: 20,
    initialLoad: true,
    useWindow: true,
    useCapture: false,
    loader: <Loading className="zent-infinite-scroller-loading" show />
  };

  state = {
    isLoadingShow: false
  };

  stopLoading = () => {
    this.setState({ isLoadingShow: false });
  };

  calculateTopPosition = el => {
    if (!el) {
      return 0;
    }
    return el.offsetTop + this.calculateTopPosition(el.offsetParent);
  };

  isScrollAtBottom = () => {
    const { offset, useWindow } = this.props;
    let offsetDistance;

    if (useWindow) {
      const scrollTop =
        window.scrollY !== undefined
          ? window.scrollY
          : (document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;
      offsetDistance =
        this.calculateTopPosition(this.scroll) +
        this.scroller.offsetHeight -
        scrollTop -
        window.innerHeight;
    } else {
      const { scrollHeight, clientHeight, scrollTop } = this.scroller;
      offsetDistance = scrollHeight - clientHeight - scrollTop;
    }

    return offsetDistance <= offset;
  };

  handleScroll = () => {
    const { hasMore, loadMore } = this.props;
    if (!hasMore || !this.isScrollAtBottom()) {
      return;
    }

    this.setState({
      isLoadingShow: true
    });

    if (loadMore.length > 0) {
      loadMore(this.stopLoading);
    } else {
      loadMore()
        .then(() => {
          this.setState({ isLoadingShow: false });
        })
        .catch(() => {
          this.setState({ isLoadingShow: false });
        });
    }
  };

  addScrollListener = () => {
    const { useWindow, useCapture } = this.props;

    let scrollEl = window;
    if (!useWindow) {
      scrollEl = this.scroller;
    }

    scrollEl.addEventListener('scroll', this.handleScroll, useCapture);
    scrollEl.addEventListener('resize', this.handleScroll, useCapture);
  };

  removeScrollListener = () => {
    const { useWindow, useCapture } = this.props;

    let scrollEl = window;
    if (!useWindow) {
      scrollEl = this.scroller;
    }

    scrollEl.removeEventListener('scroll', this.handleScroll, useCapture);
    scrollEl.removeEventListener('resize', this.handleScroll, useCapture);
  };

  componentDidMount() {
    const { loadMore, initialLoad } = this.props;

    this.addScrollListener();

    if (initialLoad) {
      loadMore();
    }
  }

  componentWillUnmount() {
    this.removeScrollListener();
  }

  render() {
    const { prefix, className, children, hasMore, loader } = this.props;
    const { isLoadingShow } = this.state;
    return (
      <div
        ref={scroller => (this.scroller = scroller)}
        className={`${prefix}-infinite-scroller ${className}`}
      >
        {children}
        {hasMore && isLoadingShow && loader}
      </div>
    );
  }
}
