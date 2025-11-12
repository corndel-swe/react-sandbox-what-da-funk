import "./Exercise2.css";

import Button from "../../components/Button/Button";

const Exercise2 = (props) => {
  return (
    <section>
      <h2 class="heading">E2 : Action</h2>
      <div className="button-section">
        {/* This button only receives the required 'buttonText' prop set to "Primary". */}
        <Button />
        {/* This button receives 'buttonText' set to "Secondary" and the boolean 'isSecondary' as true. */}
        <Button />
        {/* This button receives 'buttonText' as "Invert" and the boolean 'isInverted' as true. */}
        <Button />
        {/* This button receives 'buttonText'as "Invert" and the boolean 'isInverted' as true and 'isSecondary' as true. */}
        <Button />
        {/* This button receives 'buttonText' as "caps" and the boolean 'inCaps' for
        capitalization as true. */}
        <Button />
      </div>
    </section>
  );
};

export default Exercise2;
