function calculateAge() {
    const dayEl = document.getElementById('day-input');
    const monthEl = document.getElementById('month-input');
    const yearEl = document.getElementById('year-input');
  
    const dayError = document.getElementById('day-error');
    const monthError = document.getElementById('month-error');
    const yearError = document.getElementById('year-error');
  
    const dayInput = parseInt(dayEl.value);
    const monthInput = parseInt(monthEl.value);
    const yearInput = parseInt(yearEl.value);
  
    const currentDate = new Date();
    let hasError = false;
  
    // Reset styles and hide errors
    [dayEl, monthEl, yearEl].forEach(el => el.classList.remove('border-red-500'));
    [dayError, monthError, yearError].forEach(el => el.classList.add('hidden'));
  
    // Validate year
    if (isNaN(yearInput) || yearInput > currentDate.getFullYear()) {
      yearEl.classList.add('border-red-500');
      yearError.classList.remove('hidden');
      hasError = true;
    }
  
    // Validate month
    if (isNaN(monthInput) || monthInput < 1 || monthInput > 12) {
      monthEl.classList.add('border-red-500');
      monthError.classList.remove('hidden');
      hasError = true;
    }
  
    // Validate day
    if (isNaN(dayInput) || dayInput < 1 || dayInput > 31) {
      dayEl.classList.add('border-red-500');
      dayError.classList.remove('hidden');
      hasError = true;
    }
  
    if (hasError) {
      document.getElementById('year-output').innerText = '--';
      document.getElementById('month-output').innerText = '--';
      document.getElementById('day-output').innerText = '--';
      return;
    }
  
    // Age calculation
    const birthDate = new Date(yearInput, monthInput - 1, dayInput);
    let year = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    let day = currentDate.getDate() - birthDate.getDate();
  
    if (day < 0) {
      month -= 1;
      const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      day += prevMonth.getDate();
    }
  
    if (month < 0) {
      year -= 1;
      month += 12;
    }
  
    document.getElementById('year-output').innerText = year;
    document.getElementById('month-output').innerText = month;
    document.getElementById('day-output').innerText = day;
  }
  