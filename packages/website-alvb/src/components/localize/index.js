import React from "react";
import Proptypes from "prop-types";
import { createLocaleTextGetter } from "../../utils/index";
import config from "../../config";

const localize = (Component) => {
  return class Localize extends React.Component {
    static propTypes = {
      data: Proptypes.object,
      pageContext: Proptypes.shape({
        locale: Proptypes.string,
      }),
    };
    constructor(props) {
      super(props);
      this.getLocalizedContent = createLocaleTextGetter(config.LOCALE);
    }
    render() {
      return (
        <Component
          {...this.props}
          data={this.getLocalizedContent(this.props.data)}
        />
      );
    }
  };
};
export default localize;
