import fs from 'fs/promises'

export async function getMdList(
  directoryPath: string
): Promise<string[] | undefined> {
  try {
    const files = await fs.readdir(directoryPath, {
      withFileTypes: true,
    })

    if (!Array.isArray(files)) {
      throw new Error('No folders found')
    }

    const folders: string[] = files
      .filter((file) => file.isDirectory())
      .map((file) => file.name)

    return folders
  } catch (error) {
    console.error('Error getting folders:', error)
    return new Promise((resolve) => resolve(undefined)) // Or throw the error, depending on your needs.
  }
}
