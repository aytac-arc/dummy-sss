const calculate = (event, context, cb) => {
  const body = JSON.parse(event.body);
  const salary = body.salary;

  cb(null, {
    statusCode: 200,
    body: JSON.stringify({
      deduction: salary * 0.10,
    }),
  });
}

export { calculate }
