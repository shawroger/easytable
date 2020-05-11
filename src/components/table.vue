<template>
	<div>
		<div class="et-title">
			<p class="et-text">
				<span @click="showModal = true">🔎&nbsp;</span>{{ custom.title
				}}<span @click="showModal2 = true" v-if="allCustoms.length > 1"
					>&nbsp;📚</span
				>
			</p>
		</div>
		<v2-table
			stripe
			ref="v2table"
			:data="showData"
			:key="customIndex"
			:loading="loading"
			:total="tableData.length"
			:shown-pagination="true"
			:pagination-info="{
				text: '',
				pageSize: 10,
				nextPageText: '>',
				prevPageText: '<',
			}"
			@sort-change="onSortChange"
			@page-change="onPageChange"
		>
			<v2-table-column label="#" v-if="custom.index">
				<template #default="{ row }">
					<template>
						{{ row.$$index + 10 * currentPage - 9 }}
					</template>
				</template>
			</v2-table-column>
			<v2-table-column
				v-for="item in columns"
				:key="item.label"
				:prop="item.label"
				:label="item.label"
				:sortable="item.sort"
			></v2-table-column>
		</v2-table>
		<!-- modal-1 -->

		<vodal class="et-modal" :show="showModal" @hide="showModal = false">
			<p class="et-text">数据检索 🔍</p>
			<template
				v-for="item in custom.config
					.filter((v) => v.able)
					.filter((v) => v.mode !== null)"
			>
				<input
					:key="item.label"
					v-model="item.$$val"
					v-if="!Array.isArray(item.mode)"
					:placeholder="
						'在' +
						item.label +
						'中检索 ' +
						(item.mode === '[=]' ? '(全字匹配)' : '(部分匹配)')
					"
				/>

				<select :key="item.label" v-model="item.$$val" v-else>
					<option :value="''">{{
						"在" + item.label + "中检索 (列表匹配)"
					}}</option>
					<option
						v-for="subItem in item.mode"
						:key="subItem.key"
						:value="subItem.val"
						>{{ subItem.key }}</option
					>
				</select>
			</template>
			<div class="et-div-btn-list">
				<div class="et-div-btn" @click="toSourceData">重置</div>
				<div class="et-div-btn" @click="showModal = false">关闭</div>
			</div>
			<et-footer :show="custom.footer" />
		</vodal>

		<!-- modal-2 -->
		<vodal class="et-modal" :show="showModal2" @hide="showModal2 = false">
			<p class="et-text">切换数据 📚</p>
			<select @change="onChangeConfig">
				<option
					v-for="(item, index) in allCustoms"
					:key="item.title"
					:value="index"
					>{{ item.title }}</option
				>
			</select>
			<et-footer :show="custom.footer" />
		</vodal>
		<et-footer :show="custom.footer" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useTable } from "./hooks";
import etFooter from "./footer.vue";

export default defineComponent({
	name: "et-table",
	components: { etFooter },
	setup(props, ctx) {
		const $useTable = useTable(ctx);
		return {
			...$useTable,
		};
	},
});
</script>

<style lang="scss">
.v2-table {
	.v2-table__table-container {
		overflow-x: auto !important;
	}
}

.v2-table__pagination-box {
	padding: 5px 0;
	display: flex;
	justify-content: center;

	.page {
		border-color: white !important;
		&:hover {
			border-color: white !important;
			color: grey !important;
		}
	}

	.cur-page {
		border-color: white !important;
		background-color: white !important;
		color: grey !important;
		font-weight: bolder;
		&:hover {
			color: grey !important;
		}
	}
}

p.et-text {
	text-align: center;
	font-size: 25px;
	font-weight: 200;
	font-family: "Microsoft soft";
	cursor: pointer;
	user-select: none;
	@media screen and (max-width: 768px) {
		font-size: 20px;
	}
}

div.et-title {
	padding-top: 10px;
	padding-bottom: 10px;

	select,
	option {
		outline-style: none;
		border: none;
		border-radius: 3px;
		padding: 13px 14px;
		font-size: 25px;
		font-weight: 200;
		font-family: "Microsoft soft";
		background: white;
	}

	button {
		border: none;
		background: white;
		cursor: pointer;
		&:focus {
			outline: none;
		}
	}
}
.et-modal {
	.vodal-dialog {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: auto !important;
		height: auto !important;
		padding-bottom: 25px;
	}

	div.et-div-btn-list {
		width: 60%;
		display: flex;
		justify-content: space-around;
		padding: 15px;
		@media screen and (max-width: 768px) {
			width: 90%;
		}
		div.et-div-btn {
			border-radius: 8px;
			border: solid lightgrey medium;
			font-size: 16px;
			color: #606266;
			padding: 12px 30px 12px 30px;
			margin-top: 10px;
			cursor: pointer;
			&:hover {
				background: lightgrey;
			}
		}
	}

	input,
	select {
		box-sizing: border-box;
		outline-style: none;
		border: solid #ccc thin;
		border-radius: 3px;
		padding: 13px 14px;
		font-size: 14px;
		font-weight: 200;
		font-family: "Microsoft soft";
		width: 60%;
		margin: 8px 0;
		@media screen and (max-width: 768px) {
			width: 90%;
		}
	}
}
</style>
