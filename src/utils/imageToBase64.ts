export const imageToBase64 = (url: string): Promise<string> =>
  new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.blob())
      .then(
        (blob) =>
          new Promise<string>((res, rej) => {
            const reader = new FileReader();
            reader.onloadend = () => res(reader.result as string);
            reader.onerror = rej;
            reader.readAsDataURL(blob);
          }),
      )
      .then(resolve)
      .catch(reject);
  });
