import React from "react";

import { Input, Button,Form } from "./search.style";

const SearchComponent = () => {
  return (
    <div>
      <Form>
        <Input type="search" placeholder="SEARCH" />
        <Button type="submit">
          <i class="fa fa-search"></i>
        </Button>
      </Form>
    </div>
  );
};

export default SearchComponent;
