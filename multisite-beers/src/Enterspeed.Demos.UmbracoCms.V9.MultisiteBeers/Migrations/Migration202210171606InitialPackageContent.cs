using Umbraco.Cms.Core.IO;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Strings;
using Umbraco.Cms.Infrastructure.Migrations;
using Umbraco.Cms.Infrastructure.Packaging;

namespace Enterspeed.Demos.UmbracoCms.V9.MultisiteBeers.Migrations
{
    public class Migration202210171606InitialPackageContent : PackageMigrationBase
    {
        public Migration202210171606InitialPackageContent(
            IPackagingService packagingService,
            IMediaService mediaService,
            MediaFileManager mediaFileManager,
            MediaUrlGeneratorCollection mediaUrlGenerators,
            IShortStringHelper shortStringHelper,
            IContentTypeBaseServiceProvider contentTypeBaseServiceProvider,
            IMigrationContext context) : base(packagingService,
            mediaService,
            mediaFileManager,
            mediaUrlGenerators,
            shortStringHelper,
            contentTypeBaseServiceProvider,
            context)
        {
        }

        protected override void Migrate()
        {
            ImportPackage.FromEmbeddedResource(GetType()).Do();
        }
    }
}