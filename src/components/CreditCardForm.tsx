import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { luhnValidator } from 'utilities/luhnValidator';

const CreditCardForm: React.FC = () => {
  const [cardNumber, setCardNumber] = React.useState<string>('');
  const [isDirty, setIsDirty] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(event.target.value);
  };

  const handleBlur = () => {
    setIsDirty(true);
    setCardNumber((prevCardNumber) => prevCardNumber.trim());
  };

  const handleCardSubmission = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setIsSubmitted(true);
  }

  const isCardNumberValid = React.useMemo(() => {
    return cardNumber.trim().length && luhnValidator(cardNumber);
  }, [cardNumber]);

  const helperText = React.useMemo(() => {
    if (!cardNumber.trim().length) {
      return 'Credit card number is required.';
    } 
    else if (!isCardNumberValid) {
      return 'Invalid credit card number.';
    }
    else {
      return ''; 
    }
  }, [cardNumber, isCardNumberValid]);

  return (
    <div className="credit-card-form-container">
      <form 
        className="credit-card-form"
        onSubmit={handleCardSubmission}>
        <TextField
          required
          fullWidth
          id="card-number"
          label="Card Number"
          value={cardNumber}
          onChange={handleCardNumberChange}
          onBlur={handleBlur}
          inputProps={{
            type: 'text',
            inputMode: 'numeric',
            maxLength: 16,
          }}
          error={isDirty && !isCardNumberValid}
          helperText={isDirty && helperText}
        />
        <Button 
          type="submit" 
          variant="contained" 
          disabled={!isCardNumberValid}>
          Submit
        </Button>
      </form>

      <div 
        aria-live="polite"
        className="yay-gif-container">
        {isSubmitted && (
          <img 
            className="yay-gif"
            src="/images/yay.gif" 
            alt="Two cartoon bears, one brown bear and one white bear, are cheering with pom-poms" />
        )}
      </div>
    </div>
  );
};

export default CreditCardForm;
