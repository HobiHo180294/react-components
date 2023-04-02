import React, { createRef } from 'react';
import user from '@testing-library/user-event';
import { render, waitFor } from '@testing-library/react';
import { FileBlock } from 'components/delivery/form-components/FileBlock/FileBlock';

describe('FileBlock component', () => {
  it('should render label text correctly', () => {
    const fileInputRef = createRef<HTMLInputElement>();

    const label = 'Upload a file';
    const { getByLabelText } = render(
      <FileBlock id="file" label={label} fileType="image/*" reference={fileInputRef} />
    );
    expect(getByLabelText(label)).toBeInTheDocument();
  });

  it('should allow user to select one file type, for example images', async () => {
    const testImage = new File([new Blob()], 'test.png', { type: 'image/png' });
    const fileInputRef = createRef<HTMLInputElement>();

    const { getByLabelText } = render(
      <FileBlock
        id="test-file-input"
        label="Select Image"
        fileType="image/*"
        reference={fileInputRef}
      />
    );

    const input = getByLabelText('Select Image');

    await user.upload(input, testImage);

    await waitFor(() => {
      expect(fileInputRef.current?.files?.length).toBe(1);
      expect(fileInputRef.current?.files?.[0].type).toBe('image/png');
    });
  });

  it('should allow user to upload only images', async () => {
    const testJSONValues = [{ name: 'Hello world!' }];
    const fileInputRef = createRef<HTMLInputElement>();

    const { getByLabelText } = render(
      <FileBlock
        id="test-file-input"
        label="Select Image"
        fileType="image/*"
        reference={fileInputRef}
      />
    );

    const strJSON = JSON.stringify(testJSONValues);
    const blobJSON = new Blob([strJSON]);
    const fileJSON = new File([blobJSON], 'test.json', { type: 'application/JSON' });

    File.prototype.text = jest.fn().mockResolvedValueOnce(strJSON);
    const input = getByLabelText('Select Image');

    user.upload(input, fileJSON);

    await waitFor(() => expect(fileInputRef.current?.files?.length).toBe(0));
  });
});
