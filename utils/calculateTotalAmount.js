const calculateTotalAmount = () => {
    let totalParticipants = 0;
  
    // Count participants for selected technical events
    Object.keys(events).forEach((event) => {
      if (events[event]) {
        const participants = eventDetails[event];
        totalParticipants += Object.values(participants).filter((p) => p.trim() !== '').length;
      }
    });
  
    // Count participants for selected cultural events
    Object.keys(culturalEvents).forEach((event) => {
      if (culturalEvents[event]) {
        const participants = eventDetails[event];
        totalParticipants += Object.values(participants).filter((p) => p.trim() !== '').length;
      }
    });
  
    // Calculate the total amount (100 INR per participant)
    const calculatedAmount = totalParticipants * 100;
    setTotalAmount(calculatedAmount);  // Update the totalAmount state to display on UI
  };
  

  