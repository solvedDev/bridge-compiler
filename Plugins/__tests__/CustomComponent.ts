import { TCompilerPlugin } from '../../Plugins.ts'
import { CustomEntityComponentPlugin } from '../CustomComponent/Plugin.ts'
import { FileSystem } from './FileSystem.ts'

describe('CustomComponent Compiler Plugin', () => {
	const fileSystem = new FileSystem()
	const customComponent = <TCompilerPlugin>CustomEntityComponentPlugin(<any>{
		options: { mode: 'dev' },
		fileSystem,
		compileFiles: async () => {},
		getAliases: () => [],
	})

	it('should omit custom components from build output', () => {
		expect(
			customComponent.transformPath('BP/components/entity/test.ts')
		).toBe(null)
	})
})
