import logo from "src/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="max-w-[200px]">
            <img alt="logo" src={logo} />
          </div>

          <p className="my-5">
          No part of this publication may be reproduced, distributed, or transmitted in any form or by any means, without the prior written permission of the publisher, except in the case of brief quotations embodied in critical reviews and certain other noncommercial uses permitted by copyright law.
          </p>
        </div>
        <div className="mt-8 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <a className="block" href="mailto:contactus@spartanfitness.com">
            contactus@spartanfitness.com
          </a>
          <a className="block" href="tel:3964678953">
            (896)-467-8953
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
