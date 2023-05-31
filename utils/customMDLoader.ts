import { Document } from 'langchain/document';
import { readFile } from 'fs/promises';
import { BaseDocumentLoader } from 'langchain/document_loaders';

export class CustomMDLoader extends BaseDocumentLoader {
  constructor(public filePath: string) {
    super();
  }

  public async load(): Promise<Document[]> {
    let buffer: Buffer;
    let metadata: Record<string, string>;

    // Read the file
    buffer = await readFile(this.filePath);
    metadata = { source: this.filePath };

    // Parse the content
    const markdown = buffer.toString('utf8');

    // Create Document object and return as an array
    return [
      new Document({
        pageContent: markdown, // use the appropriate property name here
        metadata: metadata,
      }),
    ];
  }
}
