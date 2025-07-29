try {
  const response = await fetch("https://api.api-ninjas.com/v1/dictionary?word=code&word=come", {
    method: 'GET',
    headers: {
      'X-Api-Key': '4dNuFsu07Ip53bhVHfapxw==IYN1IkfGgIAeROBW'
    }
  });

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
} catch (err) {
  console.error(err);
}